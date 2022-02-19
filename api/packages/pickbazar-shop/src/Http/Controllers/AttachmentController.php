<?php


namespace PickBazar\Http\Controllers;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use PickBazar\Database\Models\Attachment;
use PickBazar\Database\Repositories\AttachmentRepository;
use PickBazar\Exceptions\PickbazarException;
use PickBazar\Http\Requests\AttachmentRequest;
use JD\Cloudder\Facades\Cloudder;

use Prettus\Validator\Exceptions\ValidatorException;


class AttachmentController extends CoreController
{
    public $repository;

    public function __construct(AttachmentRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Collection|Attachment[]
     */
    public function index(Request $request)
    {
        return $this->repository->paginate();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param AttachmentRequest $request
     * @return mixed
     * @throws ValidatorException
     */
    public function store(AttachmentRequest $request)
    {
        $urls = [];
        // foreach ($request->attachment as $media) {
            // $attachment = new Attachment;
            //$attachment->url=$urls;
            // $attachment->addMedia($media)->toMediaCollection();
            // foreach ($attachment->getMedia() as $image) {
            //     $converted_url = [
            //         'thumbnail' => $image->getUrl('thumbnail'),
            //         'original' => $image->getUrl(),
            //         'id' => $attachment->id
            //     ];
            // }
            // $urls[] = $converted_url;
            // 
            // $attachment->save();
            $urls = [];
            $converted_url=[];
           
            // $attachment->addMedia($image)->toMediaCollection();
            // print_r($request->attachment);
            // $images = $request->file('attachment');
            // $attachment = new Attachment;
            // $attachment->save();

            // print_r($request->file('attachment'));
           
            // $images = $request->file('attachment');

            if($request->hasFile('attachment'))
                {
                    print_r("yes");

                    foreach ($request->file('attachment') as $image) {

                        print_r("no");
                        $attachment = new Attachment;
                        $attachment->save();
                        
                        $name = $image->getClientOriginalName();
                        $image_name = $image->getRealPath();;
                        Cloudder::upload($image_name, null);
                        list($width, $height) = getimagesize($image_name);
                        $image_url= Cloudder::show(Cloudder::getPublicId(), ["width" => $width, "height"=>$height]);
                        //save to uploads directory
                        //$image->move(public_path("uploads"), $name);
                        //Save images
                        $attachment->addMedia($image)->toMediaCollection();
                    
                                $converted_url = [
                                    'thumbnail' => $image->getUrl('thumbnail'),
                                    'original' => $image->getUrl('thumbnail'),
                                    'id' => $attachment->id
                                ];
                                $urls[]= $converted_url;
                    }
                   
                }
            
            //$this->saveImages($request, $converted_url);
            $urls[]= $converted_url;
     
            
            // return response('Image Uploaded Successfully');
      
        return $urls;
    }
    public function saveImages(Request $request, $converted_url)
   {
       $image = new Attachment();
    //    $image->image_name = $request->file($media)->getClientOriginalName();
    // print_r($request->attachment);
     
     
       //return $converted_url;
   }
  
    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show($id)
    {
        try {
            $this->repository->findOrFail($id);
        } catch (\Exception $e) {
            throw new PickbazarException('PICKBAZAR_ERROR.NOT_FOUND');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param AttachmentRequest $request
     * @param int $id
     * @return bool
     */
    public function update(AttachmentRequest $request, $id)
    {
        return false;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        try {
            return $this->repository->findOrFail($id)->delete();
        } catch (\Exception $e) {
            throw new PickbazarException('PICKBAZAR_ERROR.NOT_FOUND');
        }
    }
}
